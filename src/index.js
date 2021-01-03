import _ from 'lodash';
import './style/global.scss';
import './style/app.scss';
import Icon from '../assets/images/preview.jpg';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    myIcon.style.width = '300px';
    const span = document.createElement('i');
    span.classList.add('icon-heart');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';

    btn.onclick = () => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        print();
    });
    element.appendChild(myIcon);
    element.appendChild(span);
    element.appendChild(btn);
    return element;
}
  
document.body.appendChild(component());

// if (module.hot) {
//     module.hot.accept('./print.js', () => {
//         console.log('Accept the updated printMe module!')
//         printMe()
//     })
// }