import React from 'react'
import iphone from '../assets/iphone11.png'

const Intro = () => {
    return (
        <div>
            <h1>iPhone 11</h1>
            <img src={iphone} alt='mobile' width={400} />
            <h2>Detail About</h2>
            <p>The iPhone 11, released by Apple in September 2019, stands as
                one of the most commercially successful and enduring smartphones
                in the company's lineup. Designed as the direct successor to the
                iPhone XR, it brought flagship-tier performance to a more
                accessible price point, anchoring itself as the mainstream choice
                for millions of users worldwide. The device features a vibrant
                6.1-inch Liquid Retina HD LCD display enclosed in a durable glass
                and aluminum chassis, offering a robust build quality alongside
                an IP68 water and dust resistance rating.</p>

            <p>At its core, the iPhone 11 is powered by Apple's A13 Bionic chip,
                which delivered industry-leading computing and graphics speeds
                at launch while maximizing battery efficiency. The phone's
                defining upgrade was its dual-camera system, which introduced
                a 12MP Ultra Wide lens alongside the standard Wide sensor,
                allowing users to capture vastly broader landscapes and tight
                indoor shots. This setup also debuted Apple's highly acclaimed
                Night Mode, drastically improving low-light photography, and
                established the phone as a powerhouse for 4K video recording,
                ensuring its relevance for years after its initial debut.</p>
        </div >
    )
}

export default Intro;