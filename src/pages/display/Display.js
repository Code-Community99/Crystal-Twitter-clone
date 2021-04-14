import { Button, IconButton } from '@material-ui/core';
import Slider from '@uiw/react-slider';
import React, { useState } from 'react';
import { FaFire, FaHeart, FaTwitter } from 'react-icons/fa';
import { IoCart, IoCheckmark, IoFingerPrintOutline, IoFlower, IoTextOutline, IoStarSharp } from 'react-icons/io5';
import './../../styles/display/Display.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeDefaultColour, makeDefaultBgColour, makeDefaultGlobalColour } from '../../features/display/DisplaySlice';
import { selectColour } from './../../features/display/DisplaySlice';

function Display() {

  const colour = useSelector(selectColour);

  const [activeColour, setActiveColour] = useState(colour.colour);
  const [activeBgColour, setActiveBgColour] = useState(colour.bg);
  const [activeGlobalColour, setActiveGlobalColour] = useState(colour.globalColor);

  const dispatch = useDispatch();

  const setMeAsDefaultColor = (colour) => {
    setActiveColour(colour)
    dispatch(
      makeDefaultColour(colour)
    )
  }
  const setMeAsDefaultBackgroundColor = (colour, globalColor) => {
    setActiveBgColour(colour);
    setActiveGlobalColour(globalColor);
    dispatch(
      makeDefaultBgColour(colour)
    )
    dispatch(
      makeDefaultGlobalColour(globalColor)
    )
  }
  return (
    <div className="display-settings">
      <div className="display-settings-para">
        <p className="text-center" style={{ color: activeGlobalColour }}>
          Manage your font size, color and background. These settings affect all the Twitter accounts on this browser.
        </p>
      </div>
      <div className="display-settings-preview">
        <div className="display-settings-preview-card">
          <div className="display-settings-preview-card-button">
            <IconButton className="display-settings-preview-card-button-btn" style={{ background: activeColour }}>
              <FaTwitter />
            </IconButton>
          </div>

          <div className="display-settings-preview-card-text">
            <h4 style={{ color: activeGlobalColour }}> Twitter <span>@Twitter</span> <span>. 1h</span> </h4>
            <p style={{ color: activeGlobalColour }}>
              At the heart of Twitter are short messages called Tweets - just like this one - which can include photos, videos, links, text, and <span style={{ color: activeColour }}>#hashtags</span>!
            </p>
          </div>

        </div>


        <StyleSettingComponent title="Font size" globalColor={activeGlobalColour}>
          <FontSizeSlider global_colour={activeGlobalColour} />
        </StyleSettingComponent>
        <StyleSettingComponent title="Color" globalColor={activeGlobalColour}>
          <div className="pick-colors">
            <ColorPicker colour="#1da1f2" display_icon={activeColour === '#1da1f2' ? true : false} lower_icon={<FaHeart />} click={setMeAsDefaultColor} />
            <ColorPicker colour="#ffad1f" display_icon={activeColour === '#ffad1f' ? true : false} lower_icon={<IoStarSharp />} click={setMeAsDefaultColor} />
            <ColorPicker colour="#e0245e" display_icon={activeColour === '#e0245e' ? true : false} lower_icon={<IoFlower />} click={setMeAsDefaultColor} />
            <ColorPicker colour="#794bc4" display_icon={activeColour === '#794bc4' ? true : false} lower_icon={<IoCart />} click={setMeAsDefaultColor} />
            <ColorPicker colour="#f45d22" display_icon={activeColour === '#f45d22' ? true : false} lower_icon={<FaFire />} click={setMeAsDefaultColor} />
            <ColorPicker colour="#17bf63" display_icon={activeColour === '#17bf63' ? true : false} lower_icon={<IoFingerPrintOutline />} click={setMeAsDefaultColor} />
          </div>
        </StyleSettingComponent>
        <StyleSettingComponent title="Background" globalColor={activeGlobalColour}>
          <div className="backgrounds">

            <BackGroundColour
              is_active={activeBgColour === '#ffffff' ? true : false}
              display_title="Default"
              background_colour="#ffffff"
              global_colour="#000000"
              border_colour={activeColour}
              click={setMeAsDefaultBackgroundColor}
            />

            <BackGroundColour
              is_active={activeBgColour === '#15202b' ? true : false}
              display_title="Dim"
              background_colour="#15202b"
              global_colour="#ffffff"
              border_colour={activeColour}
              click={setMeAsDefaultBackgroundColor}
            />

            <BackGroundColour
              is_active={activeBgColour === '#000000' ? true : false}
              display_title="Lights out"
              background_colour="#000000"
              global_colour="#ffffff"
              border_colour={activeColour}
              click={setMeAsDefaultBackgroundColor}
            />

          </div>
        </StyleSettingComponent>

        <div className="display-settings-preview-card-footer">
          <Button className="display-settings-preview-card-footer-button" style={{ background: activeColour }}> Done
          </Button>
        </div>

      </div>
    </div>
  )
}

const StyleSettingComponent = ({ title, children, globalColor }) => {

  return (
    <div className="style-setting-component">
      <h3 className="style-setting-component-title" style={{ color: globalColor }}>{title}</h3>
      <div className="style-setting-component-body">
        {children}
      </div>
    </div>
  )
}

const FontSizeSlider = ({ global_colour }) => {
  const [size_, setSize] = useState(18)
  return (
    <div className="font-size-slider">
      <IconButton className="font-size-slider-btn f-btn" style={{ color: global_colour }}>
        <IoTextOutline />
      </IconButton>
      <div className="font-size-slider-s">
        <Slider
          min={14}
          max={30}
          step={4}
          dots
          // marks
          value={size_}
          // style={{ maxWidth: 460 }}
          onChange={(value2) => {
            console.log(value2)
            setSize(value2);
          }}
        />
      </div>
      <IconButton className="font-size-slider-btn l-btn" style={{ color: global_colour }}>
        <IoTextOutline />
      </IconButton>
    </div>
  )
}

const ColorPicker = ({ colour, lower_icon, display_icon, click }) => {

  return (
    <div className="pick-color-outer">
      <div>
        <IconButton className="pick-color" style={{ background: `${colour}` }} onClick={e => click(colour)}>
          {
            display_icon &&
            <IoCheckmark size={30} />
          }
        </IconButton>
      </div>
      <div>
        <IconButton className="pick-color-icon" style={{ color: `${colour}` }} disabled>
          {
            lower_icon
          }
        </IconButton>
      </div>
    </div>
  )
}

const BackGroundColour = ({ is_active, display_title, border_colour, global_colour, background_colour, click }) => {

  return (
    <div className={`background ${is_active ? 'active' : ''}`} style={{ borderColor: border_colour, background: background_colour }} onClick={e => click(background_colour, global_colour)}>
      <input type="checkbox" checked={is_active} style={{ background: border_colour }} />
      <p>{display_title}</p>
    </div>
  )
}

export default Display
