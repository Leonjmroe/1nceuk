import css from './about.module.css';

export default function About() {
  return (
    <div className={css.about_container}>
      <div className={css.about_cont}>
        <div className={css.about_title}>About Us</div>
        <div className={css.about_content_cont}>
          <img src="https://d3plr6xnj3tfvw.cloudfront.net/Core/louis_llangland_2.jpg" className={css.about_img}/>
          <div className={css.about_text}>
              We are not merely another clothing brand; we are a movement in this creative clothing culture. Our mission is to connect the local music, design, and skate community in Wales by supporting and fostering talented, creative minds. We have run multiple competitions for local artists to have an opportunity to showcase their art on clothing, with an addition of our style expertise. We bring together individuals who share a universal interest, forming a community that transcends personal style. Our clothing has become an integral part of this subculture, embodying our iconic purple crown logo—a symbol of achievement, ambition, and pride in one's talents.
              <p className={css.paragraph}></p> We aim to provide a platform where filmmakers, skaters, artists, photographers, and creative minds can forge shared lifestyles and build meaningful relationships that extend beyond fashion. Realising, this is no easy task, but for the benefit that we can bring to our community and wider audience, creating a necessary platform which you can show your art on is worth it.. Our brand has earned significant recognition and unwavering support because we fulfill a crucial need within the community.
              <p className={css.paragraph}></p> With the acronym 1 NEEDED CLOTHING ENTERPRISE, we symbolize our brand's indispensability within the local community, garnering recognition and support. We stay true to our roots and resist the fleeting trends which the fashion world sail through. Despite being surrounded by swaying and changeable times, 2023 marks a chance for all people alike in the creative field to find solace, connection to each other, and similarity. With 1nce we brought together people who have come to work effectively in their field together, examples being; filmers and skaters, rappers and producers, artists, the list goes on. remaining dedicated to our vision. Because at 1nce we understand the demand and urge for a like minded home of creativity, expressed in our own clothes.Join us on this transformative journey where we celebrate and empower emerging creators and talent. 
              <p className={css.paragraph}></p> Together, we create a movement that transcends boundaries, embracing diversity and inspiring one another to reach new heights.
          </div>
        </div>
      </div>
    </div>
  );
}

