import css from './about.module.css';

export default function About() {
  return (
    <div className={css.about_container}>
      <div className={css.about_cont}>
        <div className={css.about_title}>About Us</div>
        <div className={css.about_content_cont}>
          <img src="https://d3plr6xnj3tfvw.cloudfront.net/Core/about_page_image.jpeg" className={css.about_img}/>
          <div className={css.about_text}>
              We are more than another inexperienced clothing brand saturating the market without a mission. Our focus does not lie in fast fashion or quick money. We are a movement that enables creative minds an outlet to showcase their art. Since 2021 our vision has been the same, to connect the local scene of talented individuals withing louis’ interests: skateboarding and rap music and art. We have fostered supportive links for up and coming artists to build their professional identity by releasing limited garments with their designs. Our goal is to become one needed clothing enterprise UK wide, hence the acronym - 1NCEUK. It's evident that our brand has had an influence on the creative ambitious mind of Wales, so far,  the crown popping up in skate promotion videos and music videos from across wales. There is no other brand in Wales providing the same value as 1NCE. Because we understand the demand and urge for like minded individuals to connect with each other through the medium of their adorn clothing. Consider Louis a networking finatic. 
              <p className={css.paragraph}></p> During 2022 We had run multiple competitions for local artists to have an opportunity to showcase their art on clothing they could keep. This helped them become more recognisable and network with likeminds - that's our expertise. While fostering these connections, we created unique styles that built to last. Embodying our iconic purple crown logo on each piece. we established a recognisable emblem to symbolise achievements and ambition.
              <p className={css.paragraph}></p> Whether you're a filmmaker, skater, artist, photographer, or a business minded fashionable individual. You are welcome here to build meaningful relationships that extend beyond fashion.Our brand has earned significant recognition and unwavering support because we fulfill a crucial need within the community with our vast 3 years of networking the best talent in wales.  
              <p className={css.paragraph}></p> 1NCEUK can forge a greater purpose and help with your independent career in creative fields. We all know the struggle of low engagement and undervalued work. Email us to begin your journey to a better life than mundane 9-5.Together, we create a movement that transcends your fashion preferences, wear 1NCE and feel the sense of belonging, because that's what we give.
          </div>
        </div>
      </div>
    </div>
  );
}

