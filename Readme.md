# Crystal-Twitter-clone

# All possible pages
➔	Home
➔	Explore
➔	Notifications
➔	Messages
➔	Bookmarks
➔	Lists
➔	Profile

## ➔ More
  ➔	Topics
  ➔	Moments
  ➔	News letter
  ➔	Twitter ads
  ➔	Analytics
  ➔	Settings and Privacy
  ➔	Help center
  ➔	Display
  ➔	Keyboard Shortcuts

# General design
  ❖	Left sidebar flex 0.2 - This is always the navigation tab
  ❖	Middle flex 0.5 - In most pages it is flex 0.5 otherwise flex 0.3
  ❖	Right sidebar flex 0.3
  ❖	Messaging snackbar bottom right - visible in all pages
  ❖	Middle part update on page change - Each page has a specific middle view
  ❖ All design images are located at 'assets/images/design-images/' DIR - add more images if need be.

### Home page
####  Middle-bar
  ➢	Post form - variant(media,gif,poll,emoji,schedule).
  ➢	Tweets - Twitter card inclusion ()

#### Right sidebar
	●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Explore page
####  Middle-bar
  ➢	Search bar
  ➢	Updates
  ➢	Trends for you.
  ➢	News updates

#### Right sidebar
  ●	Who to follow


### Notifications page
####  Middle-bar
  ➢	Contains tabs
    ●	Filter-all and mentioned bars
    ●	All - shows all notifications
  

#### Right sidebar
  ●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Messages page
●	left-flex .3
●	Right-flex .5
####  Middle-bar
  ➢	Search bar
  ➢ Messages list
    
#### Right sidebar
  ●	Specific message details
  
### Bookmarks page
####  Middle-bar
  ➢	Bookmarks list
  
#### Right sidebar
	●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Lists page
####  Middle-bar
  ➢	Pinned lists
  ➢ Discover new lists
  ➢ Your lists
  ➢ Create new list model
  
#### Right sidebar
	●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Profile page
####  Middle-bar
  ➢	User account details.
  ➢ Tabs
    ● tweets
    ● likes
    ● tweets and replies
    ● media
    ● etc

  
#### Right sidebar
	●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Topics page
####  Middle-bar
  ➢ Tabs
    ● following
    ● Not interested
  
#### Right sidebar
	●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Topics page
####  Middle-bar
  ➢ List of all user moments.
  
#### Right sidebar
	●	Twitter search - attr (people,topics,keywords,tweets)
  ●	Trends for you
  ●	Who to follow

### Newsletters page
  ●	Makes a modal modal for ads

### Twitter ads page
  ● Redirect to ads page.

### Analytics page
	● Redirects to analytics page based on the user - all activities

### Settings page
  ❖	Flex - .3
  ❖	Right side of middle flex .5
####  Middle-bar
  ➢ List of all user moments.
  
#### Right sidebar
	●	More about a specific setting
	
###  Help center page
  ●	Redirect to the help center.

###  Display page
  ●	Model - customization(color,font-size,background)

###  Keyboard shortcuts
  ●	Modal -navigations tab and action stab
  ●	List of the various shortcuts


# There are a number of components
  - They are global so they should be added into 'global/components/globals' DIR
    ❖ Twitter card
    ❖ Post form
    ❖ Who to follow
    ❖ Like button
    ❖ Tweet button
    ❖ etc

##### Generally you can add more pages or components that are missing and this can help reduce the gap of missing items in the above notes.
##### N/B:- Components and pages naming should be capitalized otherwise react will throw an error over the same
            


* Coding is fun; \* Crystal web dev \*