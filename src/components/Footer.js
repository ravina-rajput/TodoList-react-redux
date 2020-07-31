import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <div>
    <span>Show ToDo: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All ToDos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active Todos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_FINISHED}>
      Finished ToDos
    </FilterLink>
  </div>
);

export default Footer;
