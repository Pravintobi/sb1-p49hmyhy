import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Post, Comment } from '../types/database';
import { format } from 'date-fns';
import { useAuth } from '../components/Auth/AuthProvider';
import { ArrowLeft } from 'lucide-react';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      const { data: postData, error: postError } = await supabase
        .from('posts')
        .select('*, author:profiles(*)')
        .eq('id', id)
        .single();

      if (!postError && postData) {
        setPost(postData);
      }

      const { data: commentsData } = await supabase
        .from('comments')
        .select('*, author:profiles(*)')
        .eq('post_id', id)
        .order('created_at', { ascending: true });

      if (commentsData) {
        setComments(commentsData);
      }
    };

    fetchPost();
  }, [id]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !id || !newComment.trim()) return;

    try {
      const { data: commentData, error } = await supabase
        .from('comments')
        .insert([
          {
            content: newComment,
            post_id: id,
            author_id: user.id,
          },
        ])
        .select('*, author:profiles(*)')
        .single();

      if (error) throw error;
      if (commentData) {
        setComments([...comments, commentData]);
        setNewComment('');
      }
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  if (!post) return null;

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-4xl mx-auto mt-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <article className="bg-gray-900 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="text-gray-400 text-sm mb-8">
            By {post.author?.username} • {format(new Date(post.created_at), 'PPP')}
          </div>
          <div className="prose prose-invert max-w-none">
            {post.content}
          </div>
        </article>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-8">Comments</h2>
          
          {user && (
            <form onSubmit={handleAddComment} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Add a comment..."
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Post Comment
              </button>
            </form>
          )}

          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-gray-900 rounded-lg p-6">
                <div className="text-gray-400 text-sm mb-2">
                  {comment.author?.username} • {format(new Date(comment.created_at), 'PPP')}
                </div>
                <div className="text-white">{comment.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;