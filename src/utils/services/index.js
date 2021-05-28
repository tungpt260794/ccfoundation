import axios from "axios";

import findBlogs from "./findBlogs";
import countBlogs from "./countBlogs";
import findCategories from "./findCategories";
import findBlog from "./findBlog";
import findProjects from "./findProjects";
import countProjects from "./countProjects";
import findProject from "./findProject";
import createGrantApplication from "./createGrantApplication";

const libs = { axios };

export const serviceFindBlogs = async (options = {}) =>
  await findBlogs(libs, options);

export const serviceCountBlogs = async (options = {}) =>
  await countBlogs(libs, options);

export const serviceFindCategories = async (options = {}) =>
  await findCategories(libs, options);

export const serviceFindBlog = async (options = {}) =>
  await findBlog(libs, options);

export const serviceFindProjects = async (options = {}) =>
  await findProjects(libs, options);

export const serviceCountProjects = async (options = {}) =>
  await countProjects(libs, options);

export const serviceFindProject = async (options = {}) =>
  await findProject(libs, options);

export const serviceCreateGrantApplication = async (options = {}) =>
  await createGrantApplication(libs, options);
