import React from 'react'
import { Link } from 'react-router-dom'

const Letter = () => {
  return (
    <div className='letter'>
        <h2>
        <strong> প্রিয়তমা, ❤️ </strong> </h2>

    <h2>তুমি জানো, তোমার হাসিটা রোদের মতো? ☀️ শুধু আলো নয়, উষ্ণতাও ছড়িয়ে দেয়, ঠিক আমার হৃদয়ের গভীরে। তোমার চোখে এক ধরনের জাদু আছে—যেখানে একবার হারালে আর ফিরে আসতে ইচ্ছে করে না। 😍</h2>

    <h2>আমি শুধু তোমাকে ভালোবাসতে চাই না, তোমার পাশে থাকতে চাই, তোমার দিনগুলো সহজ করে দিতে চাই। ✨ তোমার হাত ধরে বৃষ্টি ভেজা পথে হেঁটেছি, চাঁদের আলোয় গল্প শুনেছি—এভাবেই সারাজীবন কাটিয়ে দিতে চাই।</h2>

    <h2>তুমি আমার সবচেয়ে সুন্দর গল্প, সবচেয়ে মিষ্টি কবিতা। 💖 আর আমি? আমি শুধু তোমার হতে চাই… চিরদিন।</h2>
<h2>
    শুধুই তোমার, <br />
 <strong>Rifat 💌✨ </strong>
        </h2>
<h2><Link to={'/Surprise'}>Surprise</Link> is open for You. Go and visit there.</h2>
    </div>
  )
}

export default Letter