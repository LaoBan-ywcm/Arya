import './post_view.less';

import { faBoxArchive, faCalendarPlus, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
  {
    title: '切尔诺贝利事件',
    time: '2021-08-31',
    category: '读书',
    tag: '测试',
    content: `和沸水堆一样，都是轻水堆（普通的水）。和沸水堆的不同是，则是要对水加以高压，让他保持液体状态，然后再通过从反应堆出来的水加热另外一个系统的水，然后用该系统的水蒸气作为发电的动力，这样的系统也叫做双回路系统，沸水堆是单回路系统，通过双回路系统就解决了沸水堆水蒸气容易泄露辐射的问题
    重水堆核电站
    重水堆就是用的重水作为冷却剂，由于轻水也会吸收中子，会降核裂变效率，所以得使用浓缩铀。但是重水不会像轻水吸收大量中子，也就不需要浓缩铀做原料，使用天然铀就可以。缺点就是造价高
    快中子增值反应堆
    上述核电站类型的核燃料都是用的铀-235或者钚-239，都是容易产生分裂的同位素，称为“可裂变物质”。而铀-238和中子碰撞后会产生可裂变物质，称为“增值性材料”
    如果反应堆中的核裂变都由快中子诱发，那么这种反应堆就叫做快中子反应堆。但是快中子大部分未经过任何核裂变就会离开，为了解决这个问题，就在反应堆外壳上裹了一层增值性材料，在快中子逃离的时候，会碰撞上外壳的增值性材料，就会继续核裂变
    这种反应堆使用液态钠或钠钾合金作为冷却剂，但是钠极易与空气和水发生激烈反应，所以得经常停机检修，现在大部分国家都已经停止了对该类型核电站的研究
    `,
    img: 'bg.png'
  }
];

const PostView = ({
  info
}) => {
  const {
    title, time, category, tag, content
  } = info;
  return (
    <div className="post">
      <div className="post_cover">
        <img className="post_bg" src="https://blog-img-1256171178.cos.ap-beijing.myqcloud.com/%E5%88%87%E5%B0%94%E8%AF%BA%E8%B4%9D%E5%88%A9%E4%BA%8B%E4%BB%B6%2Fthumbnail.png" alt="" />
      </div>
      <div className="post_info">
        <span id="post_title">{title}</span>
        <div className="post_meta_info">
          <span id="post_time">
            <FontAwesomeIcon id="post_icon" icon={faCalendarPlus} />
            发表于
            {time}
          </span>
          <span id="post_meta_line">|</span>
          <span id="post_category">
            <FontAwesomeIcon id="post_icon" icon={faBoxArchive} />
            {category}
          </span>
          <span id="post_meta_line">|</span>
          <span id="post_tag">
            <FontAwesomeIcon id="post_icon" icon={faTags} />
            {tag}
          </span>
        </div>
        <div id="post_content">{`${content.substr(0, 61)}...`}</div>
      </div>
    </div>
  );
};

const PostViews = () => {
  const postArray = [];
  for (let i = 0; i < data.length; i += 1) {
    postArray.push(<PostView info={data[i]} key={i} />);
  }

  return (
    <div className="post_box">
      <div className="post_grid_box">
        {postArray}
      </div>
    </div>
  );
};

export default PostViews;
