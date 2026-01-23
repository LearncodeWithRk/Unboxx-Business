'use client';

import Link from 'next/link';

export function TermsOfService() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">
                Last updated: January 21, 2026
            </p>
        </div>

        <div className="space-y-10 text-muted-foreground">
            <p>These Terms of Service ("Terms") govern your use of Unboxx Business services ("Services"). By accessing or using our Services, you agree to these Terms.</p>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>By creating an account or using our Services, you accept these Terms and our Privacy Policy. If you do not agree, do not use our Services.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Description of Services</h2>
                <p>Unboxx Business provides review monitoring, response management, analytics, and reporting tools for universities. We monitor reviews from Google Business Profile and other platforms, route them to your teams, and enable governed responses.</p>
                <p>Services are provided "as is" and may change over time. We will notify you of material changes.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Account Registration</h2>
                <p>You must provide accurate information when registering. You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Maintaining the security of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of unauthorized access</li>
                </ul>
                <p>Accounts are for your institution's authorized users only.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Acceptable Use</h2>
                <p>You agree to use our Services only for lawful purposes and in compliance with these Terms. You will not:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Engage in review gating, buying reviews, or policy-violating incentive practices</li>
                    <li>Manipulate review platforms or violate their terms of service</li>
                    <li>Access or interfere with other users' accounts or data</li>
                    <li>Upload malicious code or attempt to compromise platform security</li>
                    <li>Use Services to harass, defame, or harm others</li>
                </ul>
                <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
                <p>Unboxx Business and our licensors own all rights to the Services, including software, designs, trademarks, and content. You retain ownership of your data (reviews, responses, institutional information).</p>
                <p>You grant us permission to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Access review platforms on your behalf as authorized</li>
                    <li>Process your data to provide Services</li>
                    <li>Use anonymized data for platform improvement and analytics</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Review Platform Compliance</h2>
                <p>You are responsible for compliance with the terms of service of review platforms (Google, Facebook, etc.). We provide tools to help you comply, but ultimate responsibility rests with you.</p>
                <p>We do not enable practices that violate platform policies, including review gating, fake reviews, or incentivized reviews.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. Privacy and Data Protection</h2>
                <p>Your use of our Services is also governed by our Privacy Policy. We process your data in accordance with applicable data protection laws (GDPR, DPDP, FERPA, etc.).</p>
                <p>You are responsible for ensuring your use of Services complies with your own privacy obligations to students and other data subjects.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Payment Terms</h2>
                <p>Services are billed according to your selected plan and payment schedule. Payment terms include:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Fees are due as specified in your contract</li>
                    <li>Late payments may result in service suspension</li>
                    <li>Annual plans are billed in advance</li>
                    <li>Refund policies are specified in your contract</li>
                </ul>
                <p>We may change pricing with 30 days' notice for month-to-month plans.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Term and Termination</h2>
                <p>These Terms remain in effect while you use our Services. Either party may terminate:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>You may cancel your account at any time according to your contract terms</li>
                    <li>We may suspend or terminate your access for violations of these Terms</li>
                    <li>We may discontinue Services with reasonable notice</li>
                </ul>
                <p>Upon termination:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>You lose access to the platform</li>
                    <li>We will provide data export options as specified in your contract</li>
                    <li>Outstanding fees remain due</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">10. Warranties and Disclaimers</h2>
                <p>Services are provided "as is" without warranties of any kind, express or implied. We do not guarantee:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Uninterrupted or error-free service</li>
                    <li>Specific outcomes from using our Services</li>
                    <li>Compatibility with all systems or platforms</li>
                    <li>Prevention of all security incidents</li>
                </ul>
                <p>We disclaim all warranties to the fullest extent permitted by law.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">11. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Unboxx Business is not liable for:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Lost profits, data, or revenue</li>
                    <li>Service interruptions or data loss</li>
                    <li>Third-party actions or platform changes</li>
                </ul>
                <p>Our total liability is limited to the fees paid by you in the 12 months preceding the claim.</p>
            </div>

             <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">12. Indemnification</h2>
                <p>You agree to indemnify and hold Unboxx Business harmless from claims arising from:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Your use of Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of third-party rights (including review platform terms)</li>
                    <li>Content you submit through our Services</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">13. Governing Law</h2>
                <p>These Terms are governed by the laws of India. Disputes will be resolved through binding arbitration in accordance with Indian arbitration law, or in the courts of Delhi, India.</p>
                <p>For international clients, jurisdiction may be specified in your contract.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">14. Changes to Terms</h2>
                <p>We may modify these Terms at any time. We will notify you of material changes via email or platform notification. Continued use after changes constitutes acceptance.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">15. Entire Agreement</h2>
                <p>These Terms, along with our Privacy Policy and any signed contract, constitute the entire agreement between you and Unboxx Business.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">16. Contact</h2>
                <p>For questions about these Terms:</p>
                <p><strong>Email:</strong> <a href="mailto:legal@unboxxbusiness.com" className="text-primary hover:underline">legal@unboxxbusiness.com</a></p>
            </div>
        </div>
      </div>
    </section>
  );
}
