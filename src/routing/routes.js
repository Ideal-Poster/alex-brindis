import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../components/homepage/homepage';
import Project from '../components/project/project';

import { TransitionGroup, Transition } from "react-transition-group";

import {TweenLite, TweenMax} from 'gsap';
import { projectImageIntro, projectNameIntro, projectDescIntro, projectImageExit, projectNameExit }  from '../routing/routeAnimations'

const completeCall = target => {
  TweenLite.set(target, { clearProps: "position, width" });
};

const AppRoutes = (props) => (
  <TransitionGroup>
    <Transition
        key={props.location.pathname}
        timeout={1000}
        mountOnEnter={true}
        unmountOnExit={true}
        onEnter={node => {
          TweenMax.killTweensOf(node);

          // Node change hands animation
          const parent = node.parentNode;
          const targetWidth =
            parent.clientWidth -
            parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
          // set the position and properties of the entering element
          TweenLite.set(node, {
            position: "fixed",
            autoAlpha: 0,
            width: targetWidth
          });
          // animate in the element
          TweenLite.to(node, 0.5, {
            autoAlpha: 1,
            onComplete: completeCall,
            onCompleteParams: [node],
            delay: 0.5
          });

          // // console.log(node);

          // // first kill all tweens of the target
          // // console.log(node.childNodes[2].childNodes[0].childNodes[0].id);
          // // console.log(node.childNodes[2].childNodes[1].childNodes[0]);

          projectImageIntro(node);
          // projectNameIntro(node);
          // projectDescIntro(node);
        }} // on enter end

        onExit={node => {

          TweenMax.killTweensOf(node);
          const parent = node.parentNode;
          const targetWidth =
            parent.clientWidth -
            parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
          // set the position of the element
          TweenLite.set(node, {
            position: "fixed",
            width: targetWidth
          });

          TweenLite.to(node, 0.5, {
            position: "fixed",
            opacity: 0,
            delay: 0.5

          });
          // Project image exit animation
          // const image = node.childNodes[1].childNodes[0].childNodes[0];

          projectImageExit(node);
          projectNameExit(node);

        }} >

      <Switch location={ props.location }>
        <Route exact path="/" component={ Homepage }/>
        <Route path="/artwork/:number" component={ Project } />
      </Switch>
    </Transition>
  </TransitionGroup>
);



export default AppRoutes;