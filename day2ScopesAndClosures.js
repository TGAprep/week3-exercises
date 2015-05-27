// 1. scoping's just super important. 
// 2. Masking. naming your parameters the same thing is a bad, bad idea. 
// 3. narration: you always look in your own scope first, then you check out into the next outer scope, etc. 
// 4. Closure: you can invoke the same function multiple times with different arguments, and it all totally works!
// 5. Closures: this is the same as "stashing" or saving for later, the variables you're interested in. 
  // THis is critical. focus on using it to save what i is inside a for loop. 
  // Relate this to how i've used this for db stuff too. 
// Key point of closures: you can save values to be used later. This will not seem super important to you now. It will be critically important to you in the future. 
// Functions have access to the scope they're created in, not the scope they're invoked in.

// Closures:
// 1. nameWriter. 

// Ok, now you're heading off to a huge family reunion. And you nicely volunteered to make name tags for everyone! Oddly, your family is super well organized, and everyone has the same last name, Thinklestein. 
// Create a function called nameMaker that takes in a first name as it's only argument, and then returns the robotic greeting "Welcome to the party, FIRSTNAME Thinklestein.", where FIRSTNAME is replaced by the person's first name. 
// Now we're going to generalize this: 
// First, let's take the minor step of removing the hard-coded value of 'Thinklestein' from the function, and allow the user to pass in both a first and last name. 
// Create an entirely new function called reunionGreeter. We've found that we're just so good at greeting people at reunions that we decide to expand and do this for more families! reunionGreeter will let us modularize our code to the point we can do this. reunionGreeter takes in a last name, and returns a function that 


// Much like yesterday, a lot of today is going to involve explaining your code to your pair. Follow a similar pattern to yesterday: Think through what you expect the code to do, explain that your pair, and then test it out to see what it actually does. Once you see the actual results (which will often be different than your expectations), explain why we're seeing that behavior to your pair. 

// Today we're going to use a restaurant's kitchen as our example. We're going to have a couple different areas to our fancy kitchen: 
// bbqMeatCooker
// vegetarianCorner
// pastryConcoctions
// Clearly, each of these will have their own set of tools, and we need to make sure they share some things (a common menu) and not others (say the cutting board from the bbqMeatCooker and the vegetarian friendly one from vegetarianCorner). 

// First, let's put the name and address of our restaurant in the global scope. 
var restaurantName = 'Telegraph Cook';
var address = '1600 Shattuck Ave';

// Next we'll create the vegetarianCorner. We want to hold some variables here that are only accessible inside vegetarianCorner, so we can keep it vegan friendly. How do we keep some variables private in JS? Local Scope! And what's the only way to create local scope in JS? Inside a function body, using the var keyword! So we'll create a function for our vegetarianCorner. 

var vegetarianCorner = function() {
  // We have a dedicated veggie chef (yeah, we're a super fancy restaurant). Let's set her name here: 
  var chef = 'Amanda';
  // And a favorite dish: 
  var favoriteDish = 'saag paneer';

  // To warm up, what do you expect chef to be if we console log it right here? 
    // Explain to your partner the process the JS interpreter will go through to figure out what chef is. 
    // My explanation would go something like "First, it encounters chef, which it recognizes is a variable since it's not wrapped in quotes. It goes to look up what that variable is equal to. It looks in it's own scope first, and finds chef there! chef is equal to the string 'Amanda', and so it console.logs that string."

  // And what would we expect address to be right here?
};
vegetarianCorner();

// Now that we're back in the global scope (we're no longer inside the function body), what is chef?
  // Explain why to your pair. 
// What is address in this scope? Why?

// Great! Now let's create the rival bbqMeatCooker section of our kitchen. 

var bbqMeatCooker = function() {
  var chef = 'Raka';
  var favoriteDish = 'grilled salmon';
  // Whoa, see what we did there? We have the same variable names in this function as we do in the vegetarianCorner function. Are they going to conflict at all?
  // Talk through this with your pair, then console.log chef and favoriteDish (with labels saying that we're inside bbqMeatCooker) to see the results!
    // If you forget what we mean by labels, check out this slide, and the one below it: http://slides.com/climbsrocks/debugging#/7/3
  
  // Each function body has it's own scope. Variables created in there using the var keyword will ONLY exist within that scope. So everything inside our bbqMeatCooker has absolutely no idea what's happening inside our vegetarianCorner, as long as we use the var keyword. 

  // Our bbqMeatCooker got a bit too smoky to share a kitchen with everything else, so we had to move it out back. 
  var address = 'shed in the back yard at 1600 Shattuck Ave';

  // What happens if we console.log address here? 
    // Explain why to your pair! 
    // My explanation would go something like "the interpreter goes to look up what the address variable is equal to. Just like in our topSecretClearance example, it first looks in it's own scope, before heading out into the broader scopes. While checking in it's own local scope, it finds address! We don't have to look any further, so we log 'shed in the back yard...', and never have to reach out to the global scope to try to find this variable."

  // Ok, we realized pretty quickly that we need something slightly nicer than a shed to house our bbqMeatCooker in. So we move the address again:
  address = '1610 Shattuck Ave';

  // What is address here? What is the process by which it figures that out? Talk through this with your partner- this will likely trip up some of you!
};
bbqMeatCooker();

// Now that we're back in the global scope, what is address here? Have we changed it at all based on what we did inside bbqMeatCooker? 
// Explain why or why not to your pair, then console.log address here (with a label!), and explain why again once you've seen the results. 

// Time to create our next area, pastryConcoctions!
var pastryConcoctions = function() {
  // Our pastry chef is a bit haughty. 
  chef = 'Michael';
  address = '1517 Shattuck Ave';

  // What are the values of chef and address here? 
};
pastryConcoctions();

// What are the values of chef and address here?
  // Explain why to your pair!

// Talk through what happens when we try to access address inside of vegetarianCorner and bbqMeatCooker. 


vegetarianCorner = function() {
  var chef = 'Amanda';
  var favoriteDish = 'saag paneer';
  // What is the value of address here? 
    // Why?
};
vegetarianCorner();

bbqMeatCooker = function() {
  var chef = 'Raka';
  var favoriteDish = 'grilled salmon';
  var address = 'shed in the back yard at 1600 Shattuck Ave';
  address = '1610 Shattuck Ave';
  // What is the value of address here? 
    // Why?
  // What is the value of chef here?
    // Why?
  window.chef = 'Raka rules!';
  // What is the window object? What happens when we set properties on it?
  // What is the value of chef right here after that update?
  // 
};
bbqMeatCooker();

// Ok, by now you should have solidified on a couple of key points:
  // 1. Each function body has it's own local scope. 
    // 2. Each function invocation gets it's own scope too, but we'll get to that next :)
  // 3. To create a 'hidden' variable inside that local scope, you must use the var keyword to make sure the variable exists in that local scope.
  // 4. Not using the var keyword modifies global variables. 
  // 5. functions will first look to their own local scope before reaching out to the global scope. If two variables with the same name exist in local and global scope, the function will first find the value in the lcoal scope, and never have to reach outside to the global scope. 
  // 6. The window object is synonymous with global scope. Properties set on the window object are available in the global scope. 

// Whew, that's a lot of learning! 
// 