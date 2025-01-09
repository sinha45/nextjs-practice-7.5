export default function RootLayout({ children }) {
    return (
      
         <>
         <div className="p-5">
            <ul className="flex gap-5">
              <li>Settings</li>
              <li>Analytics</li>
              
            </ul>
            </div>
      
          {children}
          </>
      
    );
  }
  