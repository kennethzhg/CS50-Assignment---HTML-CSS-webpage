This is a simple webpage which I have created as part of the CS50 edX online course.

You can download these files (or clone/fork this repository) and view it on localhost.
Alternatively, you can view it on the Github Page that I have published (https://kennethzhg.github.io/CS50-Assignment-HTML-CSS/) after modifying these codes slightly (more on this at https://github.com/kennethzhg/CS50-Assignment-HTML-CSS/tree/editedforGHpages).

I am still new to coding, so there are some issues and ideas I have.

Current issues:
- for Chinese text, I am using 'div' because I cannot use 'textarea' like I did for English text (see first point of 'Past Issues' below), as 'textarea' does not support 'writing-mode' property (I want to present the Chinese text in the vertical-rl fashion i.e. top-to-bottom and right-to-left). Unfortunately, as a result, the text will overflow if I input longer quotes (see 'Ideas' below). I am still seeking a solution e.g. auto-scaling font-size according to text length such that they fit within the div dimensions.
- there are some inconsistencies in the Chinese font. This is beyond me as I am not the creator of the font package.
  
Ideas:
- event-triggered display of random Sage's Quote. Currently coded event is 'button onclick'. I'm considering other alternative events: every 24 hours since last visit or every midnight UTC+8 (the Sages were from China after all).

Past issues:
- text size do not auto-fit the div dimensions (my intended div height is between the top and bottom strings of the bamboo scroll). This will cause text to overflow if I input longer quotes (see 'Ideas' below). Partly resolved by using 'textarea' with the 'readonly' attribute instead of 'div' to contain the English text (but not the Chinese text as explained in 'Current Issues'). Instead of overflow, long text can now be displayed in the scrollable text box. Woohoo!
- elements did not scale according to screen size, and thus website was not mobile-friendly. Resolved by changing values for '{height: }' and '{width: }' from px to vw (viewport width).
- at some point, zooming in caused the divs containing the texts to be displaced from their intended positions. Resolved by adding '{position: relative; top: vw; right: vw}' to shift the elements around relative to one another and also in conformity with the viewpoint.
- attempted to insert a 'button' with an 'onclick' event so that user can get new randomly generated quote on demand, but somehow it didn't work as I had also coded 'body' with an 'onload' event ('body onload'). Resolved the issue by choosing  'button onclick' over 'body onload'.
