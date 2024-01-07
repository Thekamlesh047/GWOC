function ContactForm() {
    return (
        <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card  shrink-0 w-full max-w-[15rem] sm:max-w-[18rem] shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="number" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <textarea className="textarea textarea-bordered" placeholder="Massage"></textarea>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sumit</button>
        </div>
      </form>
    </div>
  </div>
</div>
    )
    
}

export default ContactForm;