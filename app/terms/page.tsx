import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | SwiftNet Solutions',
  description: 'Terms of Service for SwiftNet Solutions',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-max py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors mb-8"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <p className="text-sm text-text-tertiary">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the SwiftNet Solutions website, you agree to be bound by these Terms of Service
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily access the materials on SwiftNet Solutions&apos; website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Disclaimer
              </h2>
              <p>
                The materials on SwiftNet Solutions&apos; website are provided on an &apos;as is&apos; basis. SwiftNet Solutions
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Limitations
              </h2>
              <p>
                In no event shall SwiftNet Solutions or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                the materials on SwiftNet Solutions&apos; website, even if SwiftNet Solutions or a SwiftNet Solutions authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on SwiftNet Solutions&apos; website could include technical, typographical, or photographic errors.
                SwiftNet Solutions does not warrant that any of the materials on its website are accurate, complete, or current.
                SwiftNet Solutions may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Links
              </h2>
              <p>
                SwiftNet Solutions has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by SwiftNet Solutions of the site.
                Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Modifications
              </h2>
              <p>
                SwiftNet Solutions may revise these terms of service for its website at any time without notice. By using this website
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you
                irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <a
                  href="mailto:jsanchez@trajectorygroup.org"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  jsanchez@trajectorygroup.org
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
