import './ProfileHero.css';

import ProfileBar from './ProfileBar';

const ProfileHero = ({profileData, isMyUser}) => {

  return (
    <section className="profileHero">
      { profileData?.background_image
        ? <img className='profileHeroImage' src={profileData?.background_image} />
        : null
      }
      <div className='profileHeroInfo'>
        <h1 className='profileHeroTitle'>{profileData?.name}</h1>
        <ProfileBar profileData={profileData} isMyUser={isMyUser}/>
      </div>
      <div className='sliderGradient'></div>
    </section>
  )

}

export default ProfileHero;