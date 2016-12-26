# Sidebar directive AngularJS

![image demo sidebar](https://raw.githubusercontent.com/interaminense/sidebar-directive-angular/gh-pages/img/example.gif)

Directive created to give agility in the construction of a simple sidebar

### Directive

```html
<sidebar name="sidebar1" size="50%" position="right" has-bg="true" is-expandable="true">
  <ul>
    <li>is a item</li>
    <li>is a item</li>
    <li>is a item</li>
  </ul>
</sidebar>

<!--add a button with the same id of sidebar-->
<button id="sidebar1">sidebar left</button>
```

### Documentation

Parameter | Description | Value | required
------------ | ------------- | ------------- | -------------
name | Same button name with id | String | yes
size | Set width of the sidebar | 100px, 100%, 100, 100vw | yes
position | Set position of the sidebar | String left or right | yes
has-bg | If true the sidebar have background | boolean | no
is-expandable | If true the sidebar carries open | boolean | no
