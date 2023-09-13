import { Poppins } from "next/font/google";

 const poppins = Poppins({subsets: ['latin'], weight: ['400','700','800']});
export default function Footer() {
  return (
    <footer className="w100 flex" style={poppins.style}>
      <div className="flex-col">
        <h3>.Plants</h3>
        <ul className="footer-List flex-col-center">
          <li>FAQ</li>
          <li>Contact</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="flex-col">
      <h3>Socials</h3>
        <ul className="footer-List flex-col-center">
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>
    </footer>
  )
}
