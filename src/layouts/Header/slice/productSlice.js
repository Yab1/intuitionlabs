import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Products",
    isExpanded: false,
    subItems: [
      {
        title: "SmartiPaaS",
        description:
          "We implement ChatGPT API into your existing processes. Did you know that ChatGPT can be integrated with just one line of code?",
        link: "",
      },
    ],
  },
  {
    title: "Services",
    isExpanded: false,
    subItems: [
      {
        title: "ChatGPT Integration",
        description:
          "We implement ChatGPT API into your existing processes. Did you know that ChatGPT can be integrated with just one line of code?",
        link: "",
      },
      {
        title: "Prompt Engineering",
        description:
          "Already using ChatGPT? Let us engineer better prompts for you to create better results and lower your costs.",
        link: "",
      },
      {
        title: "AI Consulting",
        description:
          " Not sure how to best integrate AI into your business? Work with AI and ML experts who will create a custom solution tailored towards your unique business.",
        link: "",
      },
    ],
  },
];

const psSlice = createSlice({
  name: "Product and Services Slices",
  initialState,
  reducers: {
    toggleExpansion: (state, action) => {
      let updatedState = state.map((data) => {
        if (data.title === action.payload && !data.isExpanded) {
          return { ...data, isExpanded: true };
        } else {
          return { ...data, isExpanded: false };
        }
      });

      return updatedState;
    },
  },
});

export const { toggleExpansion } = psSlice.actions;

export default psSlice.reducer;
