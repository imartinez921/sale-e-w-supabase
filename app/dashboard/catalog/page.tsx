import { ReactNode } from "react";

export default function CatalogDetail({ children }: { children: ReactNode }) {
	return <main className="p-4 md:p-10 mx-auto max-w-7xl">{children}</main>;
}
