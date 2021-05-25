import useSWR from "swr";
import axios from "axios";

import fetcher from "utils/helpers/fetcher";

import findBlogs from "./findBlogs";
import countBlogs from "./countBlogs";
import findBlog from "./findBlog";
import findProjects from "./findProjects";
import countProjects from "./countProjects";
import findProject from "./findProject";
import findCategories from "./findCategories";
import createGrantApplication from "./createGrantApplication";

const libs = { useSWR, fetcher, axios };

export const useBlogs = (options = {}) => findBlogs(libs, options);

export const useBlogsCount = (options = {}) => countBlogs(libs, options);

export const useBlog = (options = {}) => findBlog(libs, options);

export const useProjects = (options = {}) => findProjects(libs, options);

export const useProjectsCount = (options = {}) => countProjects(libs, options);

export const useProject = (options = {}) => findProject(libs, options);

export const useCategories = (options = {}) => findCategories(libs, options);

export const mutateCreateGrantApplication = (options = {}) =>
  createGrantApplication(libs, options);
