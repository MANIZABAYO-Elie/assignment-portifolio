export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">Email: <a className="underline" href="mailto:manizabayoelie@gmail.com">manizabayoelie@gmail.com</a></p>
        <form className="mt-6 space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Your name" />
          <input className="w-full p-3 border rounded" placeholder="Your email" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" rows={5} />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send Message</button>
        </form>
      </div>
    </section>
  )
}