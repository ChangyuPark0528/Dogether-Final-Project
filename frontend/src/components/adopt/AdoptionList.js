import React from 'react';
import './AdoptionList.scss';
import { useNavigate } from 'react-router-dom';

const AdoptionList = () => {


  const navigate = useNavigate();

  //클릭시 강아지 상세정보 페이지로 이동
  const goAdoptionListDetail = () => {
    navigate("/AdoptionListDetail");
  }

  const goAdoptionApplication = () => {
    navigate("/AdoptionApplication");
  }



  return (
    <div className="index">

    <div className="div">

    <div className="overlap-wrapper">
        <div className="overlap-4">
          <div className="text-wrapper-24">카테고리</div>
          <img
            className="sss"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-36.png"
          />
        </div>
      </div>

    <div className="overlap-2">
        <div className="view">
          <div className="rectangle-2" />
        </div>
        <img
          className="image-10"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-26.png"
        />
      </div>

      {/* 첫번째 사진 프레임 */}
      <div className="frame-1" onClick={goAdoptionListDetail}>
        {/* 첫번째 사진 이미지*/}
          <img
            className="image-1"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-11@2x.png"
          />
          {/* 사진 호버했을 때 나오는 정보 */}
           <p className="detail-info">
            이름: 먼지
            <br />
            견종: 푸들
            <br />
            성별: 여아
            <br />
            나이: 3세
            <br />
            중성화여부 : N<br />
            예방접종여부: Y
          </p> 
      </div>

      {/* 두번째 사진 프레임 */}
      <div className="img-wrapper" onClick={goAdoptionListDetail}>
        {/* 두번째 사진 이미지 */}
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-12.png"
        />
      </div>

      {/* 세번째 사진 프레임 */}
      <div className="frame-3" onClick={goAdoptionListDetail}>
        {/* 세번째 사진 이미지 */}
        <img
          className="image-3"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-15.png"
        />
      </div>

      {/* 네번째 사진 프레임 */}
      <div className="image-wrapper" onClick={goAdoptionListDetail}>
        {/* 네번째 사진 이미지 */}
        <img
          className="image-4"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-16.png"
        />
      </div>
      
      {/* 다섯번째 사진 프레임*/}
      <div className="frame-5" onClick={goAdoptionListDetail}>
        {/* 다섯번째 사진 이미지 */}
        <img
          className="image-5"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-11-1.png"
        />
      </div>

      {/* 여섯번째 사진 프레임 */}
      <div className="frame-6" onClick={goAdoptionListDetail}>
        {/* 여섯번째 사진 이미지*/}
        <img
          className="image-9"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-13.png"
        />
      </div>
      {/* 7번째 사진 프레임 */}
      <div className="frame-7" onClick={goAdoptionListDetail}/>

      {/* 8번째 사진 프레임*/}
      <div className="frame-8" onClick={goAdoptionListDetail}>
        {/* 8번째 사진 이미지 */}
        <img
          className="image-8"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-17.png"
        />
      </div>

      {/* 9번째 사진 프레임*/}
      <div className="frame-9" onClick={goAdoptionListDetail}>
        {/* 9번째 사진 이미지*/}
        <img
          className="image-9"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-19.png"
        />
      </div>

      {/* 10번째 사진 프레임*/}
      <div className="frame-10" onClick={goAdoptionListDetail}/>
      
        {/* 11번쨰 사진 프레임*/}
      <div className="frame-11" onClick={goAdoptionListDetail}>      
          {/* 11번째 사진 이미지*/}
          <img
            className="image-11"
            alt="Image"
            src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-20.png"
          />
      </div>
     
          {/* 12번째 사진 프레임*/}
      <div className="frame-12" onClick={goAdoptionListDetail}>
        {/* 12번째 사진 이미지*/}
        <img
          className="image-12"
          alt="Image"
          src="https://cdn.animaapp.com/projects/6572e8d0c2e3a066593b0ad6/releases/6572e8fc3bb4f21fb184c67c/img/image-21.png"
        />
      </div>
      
      
      {/* <div className="rectangle" /> */}
      
      <p className="element">
        <span className="text-wrapper">◀ 11 12 13 14 </span>
        <span className="span">15</span>
        <span className="text-wrapper"> 16 17 18 19 20&nbsp;&nbsp;▶</span>
      </p>
     
    </div>
  </div>
  )
}

export default AdoptionList