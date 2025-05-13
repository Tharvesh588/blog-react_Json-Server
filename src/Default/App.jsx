import './App.css'
import Contact from '../components/Contact/Contact'
import Footer from '../components/footer/Footer'
import Nav from '../components/Header/Nav'
import Home from '../components/Home/home'
import Post from '../components/Post/Post'



function Appy() {
  return (
    <>
      <Nav />
      <section className='homeies'>
        <Home />
      </section>
      <section className='fewPost'>
        <Post />
      </section>
      <section className='contact'>
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default Appy
