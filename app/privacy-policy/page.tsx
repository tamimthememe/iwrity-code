import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="w-full bg-[#ffc49e] py-16">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <h1 className="text-center text-4xl font-bold text-[#333333] md:text-5xl">Privacy Policy</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white py-16">
        <div className="mx-auto w-full max-w-[80%] px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="sticky top-8 space-y-6">
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Getting started</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#overview" className="text-[#666666] hover:text-[#f66000]">
                        Overview
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Privacy</h3>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Table Of Contents</h3>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Privacy FAQ</h3>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Applicability</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#applicability" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#applicability" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#applicability" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Information we Collect</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#information" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#information" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#ccpa" className="text-[#666666] hover:text-[#f66000]">
                        California Consumer Privacy Act (CCPA) FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="#information" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                    <li>
                      <Link href="#information" className="text-[#666666] hover:text-[#f66000]">
                        Lorem Ipsum
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Security</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#security" className="text-[#666666] hover:text-[#f66000]">
                        Overview
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Data Management</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#data-management" className="text-[#666666] hover:text-[#f66000]">
                        Transparency and Control
                      </Link>
                    </li>
                    <li>
                      <Link href="#data-management" className="text-[#666666] hover:text-[#f66000]">
                        Privacy principles: Search, Learning, and Intelligence
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#333333]">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="#legal" className="text-[#666666] hover:text-[#f66000]">
                        Legal Overview
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Effective Date */}
                <div>
                  <h2 className="mb-4 text-xl font-bold text-[#333333]">Effective: July 5, 2023</h2>
                  <p className="mb-4 text-[#444444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-4 text-[#444444]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>

                {/* Table of Contents */}
                <div id="table-of-contents">
                  <h2 className="mb-6 text-2xl font-bold text-[#333333]">Table of Contents:</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#applicability" className="text-[#f66000] hover:underline">
                        • Applicability of This Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#information-collect" className="text-[#f66000] hover:underline">
                        • Information We Collect and Receive
                      </Link>
                    </li>
                    <li>
                      <Link href="#process-information" className="text-[#f66000] hover:underline">
                        • How We Process Your Information and Our Legal Bases for Doing So
                      </Link>
                    </li>
                    <li>
                      <Link href="#share-disclose" className="text-[#f66000] hover:underline">
                        • How We Share and Disclose Information
                      </Link>
                    </li>
                    <li>
                      <Link href="#data-retention" className="text-[#f66000] hover:underline">
                        • Data Retention
                      </Link>
                    </li>
                    <li>
                      <Link href="#security" className="text-[#f66000] hover:underline">
                        • Security
                      </Link>
                    </li>
                    <li>
                      <Link href="#age-limitations" className="text-[#f66000] hover:underline">
                        • Age Limitations
                      </Link>
                    </li>
                    <li>
                      <Link href="#changes-policy" className="text-[#f66000] hover:underline">
                        • Changes to this Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#international-transfers" className="text-[#f66000] hover:underline">
                        • International Data Transfers
                      </Link>
                    </li>
                    <li>
                      <Link href="#data-protection-officer" className="text-[#f66000] hover:underline">
                        • Data Protection Officer
                      </Link>
                    </li>
                    <li>
                      <Link href="#identifying-controller" className="text-[#f66000] hover:underline">
                        • Identifying the Data Controller and Processor
                      </Link>
                    </li>
                    <li>
                      <Link href="#your-rights" className="text-[#f66000] hover:underline">
                        • Your Rights
                      </Link>
                    </li>
                    <li>
                      <Link href="#california-rights" className="text-[#f66000] hover:underline">
                        • California Privacy Rights
                      </Link>
                    </li>
                    <li>
                      <Link href="#data-protection-authority" className="text-[#f66000] hover:underline">
                        • Data Protection Authority
                      </Link>
                    </li>
                    <li>
                      <Link href="#contacting-slack" className="text-[#f66000] hover:underline">
                        • Contacting iWrity
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Applicability Section */}
                <div id="applicability">
                  <h2 className="mb-6 text-2xl font-bold text-[#333333]">Applicability of This Privacy Policy</h2>
                  <p className="mb-4 text-[#444444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-4 text-[#444444]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident. Nullam porttitor lacus at turpis sagittis,
                    nec tincidunt nunc.
                  </p>
                  <p className="mb-4 text-[#444444] italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                </div>

                {/* Information We Collect Section */}
                <div id="information-collect">
                  <h2 className="mb-6 text-2xl font-bold text-[#333333]">Information We Collect and Receive</h2>
                  <p className="mb-4 text-[#444444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>

                  <div className="mb-6">
                    <h3 className="mb-3 text-lg font-semibold text-[#333333]">• Customer Data:</h3>
                    <p className="mb-2 text-[#444444]">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse. Cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <p className="mb-2 text-[#444444]">
                      Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </p>
                  </div>

                  <p className="mb-4 text-[#444444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                  </p>
                </div>

                {/* How We Process Section */}
                <div id="process-information">
                  <h2 className="mb-6 text-2xl font-bold text-[#333333]">
                    How We Process Your Information and our Legal Bases for Doing So
                  </h2>
                  <p className="mb-4 text-[#444444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-4 text-[#444444]">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse. Cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>
                  <p className="mb-4 text-[#444444]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>

                  <div className="mb-6">
                    <h3 className="mb-3 text-lg font-semibold text-[#333333]">Compliance With a Legal Obligation:</h3>
                    <p className="mb-2 text-[#444444]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      Nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="mb-2 text-[#444444]">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse. Cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                    <p className="mb-2 text-[#444444]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                      Nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
