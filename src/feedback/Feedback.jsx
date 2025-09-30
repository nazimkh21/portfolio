import { useEffect, useState } from 'react'
import './feedback.css'
import { listFeedback, createFeedback, createReply, getCurrentUser, logout, getGoogleLoginUrl } from '../api/feedback'

const Feedback = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
  const [content, setContent] = useState('')
  const [replyContentById, setReplyContentById] = useState({})

  async function refresh() {
    setLoading(true)
    setError('')
    try {
      const data = await listFeedback()
      setItems(data)
    } catch (e) {
      setError('Could not load feedback')
    } finally {
      setLoading(false)
    }
  }

  async function loadUser() {
    try {
      const userData = await getCurrentUser()
      setUser(userData)
    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => { 
    refresh()
    loadUser()
  }, [])

  async function onSubmit(e) {
    e.preventDefault()
    if (!content.trim()) return
    try {
      await createFeedback({ content: content.trim() })
      setContent('')
      await refresh()
    } catch (e) {
      setError(e.message || 'Failed to submit feedback')
    }
  }

  async function onReply(feedbackId) {
    const rContent = (replyContentById[feedbackId] || '').trim()
    if (!rContent) return
    try {
      await createReply(feedbackId, { content: rContent })
      setReplyContentById({ ...replyContentById, [feedbackId]: '' })
      await refresh()
    } catch (e) {
      setError(e.message || 'Failed to add reply')
    }
  }

  async function handleLogout() {
    try {
      await logout()
      setUser(null)
      await refresh()
    } catch (e) {
      setError('Failed to logout')
    }
  }

  return (
    <section id="feedback" className='feedback-section'>
      <h2 className='feedback-title'>Feedback</h2>

      {user ? (
        <div className='user-info'>
          <div className='user-details'>
            {user.avatar && <img src={user.avatar} alt={user.name} className='user-avatar' />}
            <span className='user-name'>Welcome, {user.name}!</span>
            <button className='logout-button' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className='login-prompt'>
          <p>Please log in with Google to post feedback and replies:</p>
          <a href={getGoogleLoginUrl()} className='google-login-button'>
            Login with Google
          </a>
        </div>
      )}

      {user && (
        <form className='feedback-form' onSubmit={onSubmit}>
          <textarea
            className='feedback-textarea'
            placeholder='Share your feedback...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className='feedback-button' type='submit'>Post</button>
        </form>
      )}

      {error && <div className='feedback-error'>{error}</div>}
      {loading && <div className='feedback-loading'>Loading...</div>}

      <ul className='feedback-list'>
        {items.map((fb) => (
          <li key={fb._id} className='feedback-item'>
            <div className='feedback-header'>
              <span className='feedback-author'>{fb.authorName}</span>
              <span className='feedback-date'>{new Date(fb.createdAt).toLocaleString()}</span>
            </div>
            <div className='feedback-content'>{fb.content}</div>

            <ul className='reply-list'>
              {(fb.replies || []).map((r) => (
                <li key={r._id} className='reply-item'>
                  <span className='reply-author'>{r.authorName}</span>
                  <span className='reply-date'>{new Date(r.createdAt).toLocaleString()}</span>
                  <div className='reply-content'>{r.content}</div>
                </li>
              ))}
            </ul>

            {user && (
              <div className='reply-form'>
                <input
                  className='reply-input'
                  placeholder='Write a reply'
                  value={replyContentById[fb._id] || ''}
                  onChange={(e) => setReplyContentById({ ...replyContentById, [fb._id]: e.target.value })}
                />
                <button className='reply-button' onClick={() => onReply(fb._id)}>Reply</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Feedback


