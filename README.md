This is a branch created solely for using Github Pages to publish webpages using my code.

The reason why this is necessary is that somehow GH Pages has a slightly different syntax for filepaths, resulting in my images not being rendered if I were to use the original code (which I developed using Visual Studio Code).

The changes I made to the original codes are taking away the first forward slash when I am using the src and href attributes:

e.g.
Original code: <img src="/images/Logo.png">
Code edited to make GH Pages work: <img src="images/Logo.png">
