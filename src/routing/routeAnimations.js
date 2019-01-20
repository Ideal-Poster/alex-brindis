import { TweenLite, Power3 } from 'gsap';

export function projectImageIntro(node) {
  if (node.id === "project__container") {
    const overlay = node.childNodes[1].childNodes[0].childNodes[0].childNodes[0];
    console.log(overlay);


    TweenLite.set(overlay, {
      right: 0
    });

    TweenLite.to(overlay, 0.5, {
      delay: 0.5,
      scaleX: 0,
      ease: Power3.easeInOut
    });
  };
}

export function projectImageExit(node) {
  if (node.id === "project__container") {
    const overlay = node.childNodes[1].childNodes[0].childNodes[0].childNodes[0];
    // console.log(image);

    TweenLite.set(overlay, {
      scaleX: 1,
      left:-1,
      right: '100%',
      bottom:-1,
      top: -1
    });

    TweenLite.to(overlay, 0.5, {
      scaleX: 1,
      right: 0,
      ease: Power3.easeInOut
    });
  };
}

export function projectNameExit(node) {
  if (node.id === "project__container") {
    const projectName = node.childNodes[2].childNodes[0].childNodes[0];

    TweenLite.to(projectName, 0.5, {
      opacity: 0,
      delay: 0.8,
      ease: Power3.easeInOut
    });
  };
}

export function projectNameIntro(node) {
  if (node.id === "project__container") {
    const projectName = node.childNodes[2].childNodes[0].childNodes[0];
    TweenLite.set(projectName, {
      opacity: 0,
    });

    TweenLite.to(projectName, 0.5, {
      opacity: 1,
      delay: 0.8,
      ease: Power3.easeInOut
    });
  };
}

export function projectDescIntro(node) {
  if (node.id === "project__container") {
    const projectDesc = node.childNodes[2].childNodes[1].childNodes[0]
    TweenLite.set(projectDesc, {
      opacity: 0,
    });

    TweenLite.to(projectDesc, 0.5, {
      opacity: 1,
      delay: 0.85,
      ease: Power3.easeInOut
    });
  }
}


