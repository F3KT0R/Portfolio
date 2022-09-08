import React from 'react'
import styles from '../../styles/modules/About.module.scss';
import Image from 'next/future/image';
import optica from '../../public/optica.png'

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <span>&lt;h1&gt;</span><br />
            <h1>&nbsp;&nbsp;About me:</h1>
            <br /><span>&lt;/h1&gt;</span><br />
            <hr />
            <span>&lt;p&gt;</span><br />
            <p>I've studied <span>Computer Sciences</span> at the <span>University of Szeged</span>.</p>
            <p>I was born in a small town in the Vojvodina region of Serbia which is called <span>Novi Bečej</span>.</p>
            <p>My mother tongue is <span>Hungarian</span>, but I can speak, read and write fluently <span>English</span> and <span>Serbian</span> also.</p>
            <p>Recently I worked as a <span>Quality Assurance Engineer</span> for a Medical Device Manufacturer company from the USA, but based in Szeged.</p>
            <p>I consider myself a <span>team player</span> because I'm really <span>communicative</span> and I'm <span>ready to learn</span> new skills thorugh work and experience.</p>
            <p>In my free time I do <span>Photography</span> and I play the <span>Piano</span> since I was little. I even have a Degree from Elementary Music School.</p>
            <br /><span>&lt;/p&gt;</span><br />
        </div>
       
        <div className={styles.image_container}>
        <span>&lt;Image</span><br />
            <Image 
                src={optica}
                alt='Portrait'
                className={styles.image}
                layout={'raw'}
            />
        <span>/&gt;</span><br />
        </div>
    </div>
  )
}

export default About