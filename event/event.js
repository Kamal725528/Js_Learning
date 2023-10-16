/* 
    
element.addEventListener(event, function, useCapture);

here userCapture tell us about the Event propagation in DOM Html, there are two ways of event propagation :- Event Bubbling(false value) and
Event capturing(true value).
by default it is false.

In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first,
 then the <div> element's click event.

In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, 
then the <p> element's click event.


*/


/* event -mouseEvent:-  click, mouseover, mouseout, mousedown, mouseup, mousemove
            -KeyboardEvent:- keydown, keyup
            -formEvent:-  focus, submit, blur, change
            -windowEvent:- load, resize, unload

    if add on before all the event then it act as eventlistner  */


    