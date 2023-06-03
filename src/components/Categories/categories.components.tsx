import { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from '../../components/category-item/category-item.components'
// Utilities
import Category from "../../../src/types/category.types";
import env from "../../config/env.config";

// Styles
import "./categories.styles.css";

import {CategoriesContainer, CategoriesContent} from "./categories.styles";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  console.log({ categories });

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`);

      setCategories(data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
