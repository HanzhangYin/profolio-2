export default function Portfolio() {
  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Left Panel - About */}
      <div className="flex-1 bg-zinc-50 text-black flex flex-col justify-start items-center p-4 md:p-8 relative min-h-screen md:min-h-0">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-wide">About me</h1>
          <div className="text-base md:text-lg font-bold">Hanzhang Yin</div>
          <p className="font-light max-w-xs text-sm md:text-base">
            I'm a PhD student in Mathematics at University of Kansas. I'm interested in Algebraic Combinatorics and Representation Theory.
          </p>
        </div>
      </div>

      {/* Second Panel - Research */}
      <div className="flex-1 bg-zinc-200 text-zinc-600 flex flex-col justify-start items-center p-4 md:p-8 relative min-h-screen md:min-h-0">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">Research</h2>
          <div className="text-base md:text-lg font-bold">Algebraic Combinatorics & Representation Theory</div>

          <div className="mt-8 space-y-4 text-left">
            <div>
              <p className="text-sm font-light">
                (with R. Hodges) "A NON-ITERATIVE STRAIGHTENING ALGORITHM AND ORTHOGONALITY FOR
                SKEW SCHUR MODULES"
                <a
                  href="https://arxiv.org/abs/2511.03702v1"
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (arXiv)
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-light">
                (with L. Busch, G. Silewski, W. C. Torre, and J. Wisby) "Domination Number of Cartesian Product of
                Complete Graphs"
                <a
                  href="https://www.researchgate.net/publication/366168241_DOMINATION_OF_CARTESIAN_PRODUCT_OF_COMPLETE_GRAPHS"
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (Link)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Panel - Teaching */}
      <div className="flex-1 bg-zinc-400 text-zinc-200 flex flex-col justify-start items-center p-4 md:p-8 relative min-h-screen md:min-h-0">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">Teaching</h2>
          <div className="mt-8 space-y-4 text-left">
            <div>
              <div className="text-base md:text-lg font-bold">MATH 127: Calculus III (Lab)</div>
              <div className="text-sm font-light">Fall 2025</div>
              <div className="text-sm font-light">University of Kansas, Lawrence, KS, USA</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-bold">MATH 115: Business Calculus</div>
              <div className="text-sm font-light">Spring 2025</div>
              <div className="text-sm font-light">University of Kansas, Lawrence, KS, USA</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-bold">MATH 104: Precalculus Mathematics</div>
              <div className="text-sm font-light">Fall 2024</div>
              <div className="text-sm font-light">University of Kansas, Lawrence, KS, USA</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-bold">MATH 125: Calculus I</div>
              <div className="text-sm font-light">Summer 2024</div>
              <div className="text-sm font-light">University of Kansas, Lawrence, KS, USA</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-bold">MATH 115: Business Calculus</div>
              <div className="text-sm font-light">Spring 2024</div>
              <div className="text-sm font-light">University of Kansas, Lawrence, KS, USA</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-bold">MATH 002: Intermediate Mathematics</div>
              <div className="text-sm font-light">Fall 2023</div>
              <div className="text-sm font-light">University of Kansas, Lawrence, KS, USA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Contact */}
      <div className="flex-1 bg-zinc-600 text-white flex flex-col justify-start items-center p-4 md:p-8 relative min-h-screen md:min-h-0">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">Contact</h2>
                      <ul className="mt-8 space-y-2 list-none">
              <li>
                <a href="mailto:hanyin@ku.edu" className="text-sm font-light hover:underline">Email: hanyin@ku.edu</a>
              </li>
              <li>
                <a href="https://github.com/HanzhangYin" className="text-sm font-light hover:underline">GitHub: HanzhangYin</a>
              </li>
              <li>
                <span className="text-sm font-light">Office: Snow Hall 558, University of Kansas, Lawrence, KS, USA</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
