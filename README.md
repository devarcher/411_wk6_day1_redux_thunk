- Create a button with the text "Import". Make it's variant contained and it's color primary. Then create a table underneath it. The table should have three columns (Id, Make, Actions).

- For the TableBody we are going to want to `map` through our list of "makes" (from Redux) to display all the rows. To do that we first need to hook up our `mapStateToProps` function so that our Import component can read the data. Go to `containers/Import.js` and go through the normal setup for this step. As a reminder, that involves importing "connect", import the "Import" component and then creating a mapStateToProps function that maps the property "makes" to "state.makes".

- Once that is done go to the `Router` file and switch the import so that it references "containers/Import" instead of "components/Import".

- Now we can go back to the "Import" component and write our map function. Inside of the `<TableBody>` tags we need to write `{ props.makes.map()... }`. You should know that part by now. Return a `TableRow` with three `TableCell`s in it. Reference the data from the API to see what you should put where. For example, each make has a "MakeId" and a "MakeName" so you will be using those to correspond to the Id and Make columns. Leave the actions column alone for now.

- We've got the setup in our component and we just need to tie the import button in so that it makes the fetch call when it's clicked. First we need to add `mapDispatchToProps` in our container. Let's navigate to the "Import" container and do that now. Map a property called "fetchMakes" to `() => dispatch(fetchMakes())` and remember to import the "fetchMakes" action at the top of the file.

- Now let's go to the Button in our Import component and add an "onClick" method. All it has to do is reference the "fetchMakes" prop. For example, `onClick={props.fetchMakes}`.

- It's time for the moment of truth. Click the button. It should take a second and then populate your table with a list of "makes". If it didn't, check with someone near your or ask the instructor during class. Before you do that though, spend a few minutes debugging to see if you can find out where the issue is.

- If the table is being populate it's time for us to move onto the next step which is adding our actions. We are going to have a dropdown menu on under the actions column that allows us to "delete" that particular row. We are going to refence [menus](https://material-ui.com/components/menus/) from Material UI to do this.

- First `import { MoreVert } from '@material-ui/icons'` for the button and place the <MoreVert> component under the actions column. In the table. We are going to expand our menu using it's onClick method. Reference the code from the link above to figure out how to open/close the menu. Hint: Put the code for `<Menu>` outside of the table.

- Now that the menu is working we need to create the action to delete a certain row. Make a new action called `deleteMake`. It will take accept one argument that represents the index we want to delete. We've deleted rows from tables before so look back at previous homework assignments to write an appropriate action and reducer that handles this use case. Remember to also add your new action to the `mapDispatchToProps` function in your container.

- You will probably need to use local state to pass the index you want to delete to your menu. This is another challenge we'd like to you try out on your own before asking for help.

- Once all the above is done, create a simple `<h2>` that displays `COUNT: <NUM>` where NUM is `props.makes.length`. We want to always know how many rows we have.

- Finally, add a "Import" button to the navigation bar so that we don't have to type "/import" in the browser bar each time.

## Examples

![1](./images/411_wk6_1-1.png)
![2](./images/411_wk6_1-2.png)
![3](./images/411_wk6_1-3.png)
