This is a simple webpage which I have created as part of the CS50 edX online course.

You can download these files (or clone/fork this repository) and view it on localhost.
Alternatively, you can view it on the Github Page that I have published (https://kennethzhg.github.io/CS50-Assignment-HTML-CSS/) after modifying these codes slightly (more on this at https://github.com/kennethzhg/CS50-Assignment-HTML-CSS/tree/editedforGHpages).

I am still new to coding, so there are some issues and ideas I have.

Current issues:
- text size do not auto-fit the div dimensions (my intended div height is between the top and bottom strings of the bamboo scroll). This will cause text to overflow if I input longer quotes (see 'Ideas' below). I am still trying to figure out if I need JavaScript to inject this dynamism.
- there are some inconsistencies in the Chinese font. This is beyond me as I am not the creator of the font package.

Ideas:
- on every refresh (or for every 24 hours since last visit or every midnight UTC+8), a random Sage's Quote (a list of it to be created) will be shown. Currently the quotes are hardcoded. I am still learning how to write use JavaScript (including the relevant libraries) to inject this dynamism.

Past issues:
- elements did not scale according to screen size, and thus website was not mobile-friendly. Resolved by changing values for {height: } and {width: } from px to vw (viewport width).
- at some point, zooming in caused the divs containing the texts to be displaced from their intended positions. Resolved by adding {position: relative; top: vw; right: vw} to shift the elements around relative to one another and also in conformity with the viewpoint.
