// Standard Industry Categories for Filters and Forms
export const INDUSTRY_CATEGORIES = [
    { id: "all", name: "All Industries", icon: "Globe" },
    { id: "textiles", name: "Textiles & Apparel", icon: "Users2" },
    { id: "electronics", name: "Electronics & Electrical", icon: "Zap" },
    { id: "industrial", name: "Industrial Machinery", icon: "Factory" },
    { id: "raw_materials", name: "Raw Materials & Minerals", icon: "Briefcase" },
    { id: "food_agri", name: "Food & Agriculture", icon: "ShoppingBag" },
    { id: "footwear", name: "Footwear & Leather", icon: "ShoppingBag" },
] as const;

import { Globe, Users2, Zap, Factory, Briefcase, ShoppingBag } from "lucide-react";

// Helper to get Lucide icon from string for SSR compatibility
export const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
        case "Globe":
            return Globe;
        case "Users2":
            return Users2;
        case "Zap":
            return Zap;
        case "Factory":
            return Factory;
        case "Briefcase":
            return Briefcase;
        case "ShoppingBag":
            return ShoppingBag;
        default:
            return Globe;
    }
};
