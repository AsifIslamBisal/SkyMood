import React from 'react';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import visibilityIcon from '../assets/visibility.png';
import sunriseIcon from '../assets/sunrise.png';
import sunsetIcon from '../assets/sunset.png';

const Icon = ({ src, alt, className}) => (
    <img className='w-[80px] h-[50px]' src={src} alt={alt} />
)

export const WindIcon = () => <Icon src={windIcon} alt="Wind" className="animate-icon svg-hover"/>
export const HumidityIcon = () => <Icon src={humidityIcon} alt="Humidity" className="powerful-pulse svg-hover"/>
export const VisibilityIcon = () => <Icon src={visibilityIcon} alt="Visibility" className="powerful-pulse svg-hover"/>
export const SunriseIcon = () => <Icon src={sunriseIcon} alt="Sunrise" className="powerful-pulse svg-hover"/>
export const SunsetIcon = () => <Icon src={sunsetIcon} alt="Sunset" className="powerful-pulse svg-hover"/>