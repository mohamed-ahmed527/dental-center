const FooterComp = () => {
  return (
    <footer>
      <center className="mt-10" >
        <img src={require(`./assets/logo.png`)} loading="lazy" alt="" className="w-36" />
      </center>
      <center className="mt-4 mb-10 text-lg"> Powered by FCI-ZU Students</center>
    </footer>
  );
}
 
export default FooterComp;