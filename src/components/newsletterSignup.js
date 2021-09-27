//In src/components/sub-form.component.js
import React, { useState } from "react"

const SubscriptionForm = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState("")

  //FORM_URL should be the same as the form action url pointed out above
  const FORM_URL = `https://app.convertkit.com/forms/1852115/subscriptions`

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })
      setEmail("")
      const json = await response.json()
      if (json.status === "success") {
        setStatus("SUCCESS")
        return
      }
    } catch (err) {
      setStatus("ERROR")
      console.log(err)
    }
  }

  const handleInputChange = event => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <div className="sub">
      <h2>Stay up to date about all things Email Marketing</h2>
      <p>
        Can't be arsed to listen to all the podcasts, read all the articles and read all the tweets about email marketing. I've got your back!
      </p>

      <p>
      Receive bi-weekly updates every other Sunday at 19:00 to help you with your email marketing.
      </p>

      {status === "SUCCESS" && <p>Please go confirm your subscription!</p>}
      {status === "ERROR" && <p>Oops, Something went wrong! try again.</p>}

      <form
        className="sub__form"
        action={FORM_URL}
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          aria-label="Your email"
          //The name attribute should be the same as on you selected form.
          name="email_address"
          placeholder="Your email address"
          onChange={handleInputChange}
          value={email}
          required
        />

        <button type="submit">Improve My Email Marketing</button>
      </form>

      <p className="sub__tag">
        I won't send you spam and you can unsubscribe at any time
      </p>
    </div>
  )
}

export default SubscriptionForm
