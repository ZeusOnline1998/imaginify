import MobileNav from "@/components/shared/MobileNav"
import SideBar from "@/components/shared/SideBar"
import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
			<div className="root">
				<SideBar />
				<MobileNav />
				<div className="root-container">
					<div className="wrapper">{children}</div>
				</div>
			</div>

	)
}

export default Layout
