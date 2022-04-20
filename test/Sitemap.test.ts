import { shallowMount } from "@vue/test-utils";
import { expect, test } from "vitest";
import Sitemap from "../src/components/Sitemap.vue";

const siteStructure = [
  {
    id: 1,
    name: "Home",
    type: "page",
  },
  {
    id: 2,
    name: "Blog",
    type: "folder",
  },
  {
    id: 3,
    name: "Blog Post 1",
    type: "page",
    parent: 2,
  },
  {
    id: 4,
    name: "Blog Post 2",
    type: "folder",
    parent: 2,
  },
  {
    id: 5,
    name: "Blog Text",
    type: "page",
    parent: 4,
  },
  {
    id: 6,
    name: "About",
    type: "folder",
  },
  {
    id: 7,
    name: "Example",
    type: "page",
    parent: 4,
  },
  {
    id: 8,
    name: "Information",
    type: "page",
    parent: 6,
  },
  {
    id: 9,
    name: "Contact",
    type: "page",
    parent: 6,
  },
];

test("nodes becomes list", () => {
  const wrapper = shallowMount(Sitemap, {
    props: {
      nodes: [{ name: "Root" }],
    },
  });

  expect(wrapper.find("li").text()).toBe("Root");
});
