import React from "react";
import StepRangeSlider from "react-step-range-slider/dist/StepRangeSlider";

export default class ProfileBlock extends React.Component {
  render() {
    const range = [
      { value: 1, step: 1 },
      { value: 2, step: 1 },
      { value: 3, step: 1 },
      { value: 4, step: 1 },
      { value: 5, step: 1 },
      { value: 6 },
    ];
    const { userDetails: { biography, image, name, popularity }, popularityChangeCallBack } = this.props;
    return (
      <>
        <div className="profile-pic">
          <img src={process.env.PUBLIC_URL + '/assets/profiles/' + image} className="photo" alt="profile_photo" />
        </div>
        <div className="profile">
          <div className="profile-name">{name}</div>
          <div className="profile-popularity-slider">
            <span className="slider-label">Popularity</span>
            <StepRangeSlider
              value={popularity}
              range={range}
              onChange={value => popularityChangeCallBack(value)}
            />
          </div>
          <p className="profile-bio">
            <span className="profile-bio-heading">
              Biography
            </span>
            {biography}
          </p>
        </div>
      </>
    )
  }
}