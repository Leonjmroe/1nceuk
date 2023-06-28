import css from './skating.module.css';
import YouTube from 'react-youtube';

export default function Skating() {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0
    },
  };

  return (
    <div className={css.skating_container}>
      <div className={css.skating_cont}>
        <div className={css.skating_title}>Skating</div>
        <div className={css.content_cont}>
          <div className={css.main_text}>
            Swansea has had massive roots in skateboarding since the 70s and the community still remains strong, Within this community theres abundance of talented individuals in skate and art alike.  it is customary to acknowledge skateboarders as those who admire their attire. By supplying the local skating community with a distinct identity, we aimed to facilitate recognition and connection among skaters of all levels.Through the medium of clothing, 1NCEUK endeavors to unify the creative and ambitious minds, from filmmakers to skaters and artists within our community, creating fun skate projects such as films as a result.     
          </div>
          <div className={css.main_image}></div>
          <YouTube className={css.video_1} videoId="xM8uQir3SOw" opts={opts} />
          <YouTube className={css.video_2} videoId="OoE-yuzmoHQ" opts={opts} />
          <YouTube className={css.video_3} videoId="OoE-yuzmoHQ" opts={opts} />
        </div>
      </div>
    </div>
  );
}
