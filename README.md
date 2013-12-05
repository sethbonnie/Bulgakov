Bulgakov's The Master and the Detailita
---------------------------------------

### Die Theorie

The theory behind Bulgakov is that navigation should always be present. We want to eliminate as much negative scrolling as possible. Negative scrolling is when a user scrolls up or down to get to the navigation, it's wasted time, especially on long pages. It's much like a game that requires a player to travel to a particular spot in order to access the menu. It's bad design in the sense that there is an unnecessary delay between a user deciding they want to do something and them being able to execute it.

For large screens we use a master-detail sidebar layout. Often on large screens, there is a lot of negative space on the sides of the content. That real estate could be used to offer expanded navigation -- which is often faster navigation.

On smaller screens we don't have that luxury, so we stick the most essential items on the top bar and put everything else inside a collapsible element. If we have more menu items than can fit on the screen, then we just scroll that element.

### Usage

Include `bulgakov.css` and `bulgakov.js`, then structure your html with the following ids and classes (see `example.html` for an example):
    
    #bkv_container
      #bkv_menu
        #bkv_persistent
          #bkv_menu_trigger.contract
        #bkv_collapsable
      #bkv_main

Bulgakov will handle the rest.

Put any content that belongs in the menu inside `#bkv_persistent` or `#bkv_collapsible`. Those two sections mostly pertain to how the menu is displayed on smaller screens. Anything inside  `#bkv_persistent` will show up on the top navbar, anything in `#bkv_collapsible` will only show up when the menu is expanded.
