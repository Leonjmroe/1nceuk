import css from './skating.module.css';

export default function Skating() {

  return (
    <div className={css.skating_container}>
      <div className={css.skating_cont}>
        <div className={css.skating_title}>Skating</div>
        <div className={css.content_cont}>
          <div className={css.main_text}>
            Swansea has had massive roots in skateboarding since the 70s and the community still remains strong, Within this community theres abundance of talented individuals in skate and art alike.  it is customary to acknowledge skateboarders as those who admire their attire. By supplying the local skating community with a distinct identity, we aimed to facilitate recognition and connection among skaters of all levels.Through the medium of clothing, 1NCEUK endeavors to unify the creative and ambitious minds, from filmmakers to skaters and artists within our community, creating fun skate projects such as films as a result.     
          </div>
          <div className={css.main_image}></div>
          {/*<div className={css.text_1}>Text about skate vid 1</div>*/}
          <iframe className={css.video_1} width="560" height="315" src="https://www.youtube.com/embed/xM8uQir3SOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className={css.video_2} width="560" height="315" src="https://www.youtube.com/embed/OoE-yuzmoHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
{/*          <div className={css.text_2}>Text about skate vid 2</div>
          <div className={css.text_3}>Text about skate vid 3</div>*/}
          <iframe className={css.video_3} width="560" height="315" src="https://www.youtube.com/embed/OoE-yuzmoHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

