//1.使用ES6导入语法，导入jQuery
import $ from 'jquery'

import './css/index.css'
import './css/index.less'

import logo from './images/test.png'
$('.box').attr('src',logo)

//2.定义jquery的入口函数
$(function(){ 
    //3.实现奇偶行变色
    //奇数行为红色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','black')
})

function info(target) {
    target.info = 'Person info'
}

@info 
class Person {}

console.log(Person.info)