import css from './designs.module.css';

export default function Designs() {
  return (
    <div className={css.designs_container}>
      <div className={css.designs_cont}>
        <div className={css.designs_title}>Designs</div>
        <div className={css.designs_preview_cont}>
          <div className={css.logo_cont}>
            <img className={css.logo_img_1} />
            <div className={css.logo_text_1}>As a brand, we prioritize direct communication with our community, frequently showcasing their designs and evolving together on this shared journey. In 2022, we invited a local artist to create a design that became our second logo, featuring a sleek, minimalist aesthetic and our signature purple and yellow color scheme. If you're interested in transforming your own design ideas into wearable art but have never considered it before, reach out to us. As a community-driven skateboard-centric brand, we welcome you to bring your favorite designs to life.
            </div>
          </div>
          <div className={css.logo_cont}>
            <img className={css.logo_img_2} /> 
            <div className={css.logo_text_2}>We seized an opportunity to collaborate with another burgeoning skateboard-focused brand that shares our message and values. Our goal was to seamlessly merge both logos, enabling us to create skateboarding videos that bring together different skate groups and foster friendships. As part of this collaboration, <a href="https://vented-apparel-co.square.site/">https://vented-apparel-co.square.site/</a> crafted their second design, which expanded our product offerings. You can find these new additions under the 'shop - hoodies' section.
              This partnership celebrates our shared commitment to creating content by skaters, for skaters. To check out our skateboard footage, visit <a href="https://www.youtube.com/@1nceuk/featured">https://www.youtube.com/@1nceuk/featured</a>. For more information on recent uploads, including Mumbles Skate Park videos and other updates, head to our skating page. For additional content, follow us on Instagram at <a href="https://www.instagram.com/1nceuk/">https://www.instagram.com/1nceuk/</a>.
            </div> 
          </div>
          <div className={css.logo_cont}>
            <img className={css.logo_img_3} />
            <div className={css.logo_text_3}>Featuring the iconic Pink Panther as a royal statue adorned with our signature purple crown, this design pays homage to our favorite cartoon character, which remains popular even today. Introduced in early 2021, this nostalgic design appeared on T-shirts, hoodies, bags, and stickers, becoming a staple at local skateparks and schools. While Pink Panther boasts a massive fanbase, official merchandise is scarce, with the limited HUF collection being an exception.
              This design launched our brand with a splash, but production ceased in late 2021 to respect the original character's creative integrity. However, we look forward to introducing similar, inspired designs in 2023.
            </div>  
          </div>
          <div className={css.logo_cont}>
            <img className={css.logo_img_4} />
            <div className={css.logo_text_4}>
              This design perfectly encapsulates our brand's vision. Featuring a bold community-created design alongside our original logo and several other designs from our community competition, it serves as a platform for artistic expression. Participants who contacted us after the competition had the chance to win a free T-shirt featuring their design. We extend our personal appreciation to (will find Henry on Instagram first) for discovering his unique style during the process and effectively collaborating with us. Congratulations! All items can be found at the link to our shop.

            </div> 
          </div>                                   
        </div>
      </div>
    </div>
  );
}

