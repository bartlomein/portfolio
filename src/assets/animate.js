import anime from "animejs";


export function translate(element) {
    anime({
        targets: element,
        translateX: -450,
        easing: 'easeInOutQuart',
        scale:1.1
        


        
    });
}


export function svg(element) {
    anime({
        targets: element,
        translateX: -350,
        easing: 'easeInOutQuart'

    });
}