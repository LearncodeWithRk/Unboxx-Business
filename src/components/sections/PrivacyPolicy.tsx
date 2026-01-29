'use client';

import Link from 'next/link';

export function PrivacyPolicy() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
                Last updated: January 21, 2026
            </p>
        </div>

        <div className="space-y-10 text-muted-foreground">
            <p>This Privacy Policy explains how Unboxx Business ("we," "us," "our") collects, uses, and protects information when you use our website and services.</p>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Contact information (name, email, phone, job title, university name)</li>
                    <li>Account credentials and profile information</li>
                    <li>Review data from connected platforms (Google Business Profile, etc.)</li>
                    <li>Usage data and platform interactions</li>
                    <li>Support communications and feedback</li>
                </ul>
                <p>We automatically collect certain information when you use our services:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Log data (access times, pages viewed, actions taken)</li>
                    <li>Cookies and similar tracking technologies (see Cookie Policy below)</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                <p>We use collected information to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Monitor and respond to reviews on your behalf</li>
                    <li>Send alerts, reports, and platform notifications</li>
                    <li>Process transactions and manage accounts</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Comply with legal obligations and enforce our Terms of Service</li>
                    <li>Analyze usage patterns and improve user experience</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. Information Sharing</h2>
                <p>We do not sell your personal information. We may share information with:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Service providers who help us operate our platform (hosting, analytics, support)</li>
                    <li>Review platforms where you've authorized us to respond on your behalf</li>
                    <li>Legal authorities when required by law or to protect rights and safety</li>
                    <li>Business successors in the event of a merger or acquisition (with notice)</li>
                </ul>
                <p>We share only the minimum information necessary for these purposes.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                    <li>Role-based access controls and authentication</li>
                    <li>Regular security assessments and monitoring</li>
                    <li>Audit logging and incident response procedures</li>
                </ul>
                <p>No system is completely secure. We work continuously to protect your data but cannot guarantee absolute security.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Data Retention</h2>
                <p>We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time, subject to legal retention obligations.</p>
                <p>Review data is retained according to your configured retention policies or as required by platform terms and applicable laws.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
                <p>Depending on your location, you may have rights to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Access, correct, or delete your personal information</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Export your data in a portable format</li>
                    <li>Withdraw consent where processing is based on consent</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:privacy@unboxxbusiness.live" className="text-primary hover:underline">privacy@unboxxbusiness.live</a>.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">7. International Data Transfers</h2>
                <p>We may transfer data to countries outside your location. We use appropriate safeguards (standard contractual clauses, data processing agreements) to protect your data during international transfers.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">8. Children's Privacy</h2>
                <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">9. Cookies and Tracking</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze platform usage and performance</li>
                    <li>Provide security features and fraud prevention</li>
                </ul>
                <p>You can control cookies through your browser settings. Disabling cookies may limit platform functionality.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy periodically. We will notify you of material changes via email or platform notification. Continued use of our services after changes constitutes acceptance.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">11. Contact Us</h2>
                <p>For privacy questions or to exercise your rights:</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@unboxxbusiness.live" className="text-primary hover:underline">privacy@unboxxbusiness.live</a></p>
                <p><strong>Address:</strong> Available upon request</p>
            </div>

            <div className="border-t border-border/20 pt-10 mt-12 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Compliance Framework References</h3>
                <p>This Privacy Policy supports compliance with:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>General Data Protection Regulation (GDPR) for EU/UK users</li>
                    <li>Digital Personal Data Protection Act (DPDP) for India users</li>
                    <li>Family Educational Rights and Privacy Act (FERPA) for US educational institutions</li>
                    <li>Other applicable regional data protection laws</li>
                </ul>
                <p className="mt-4 text-sm">We are not legal advisors. This policy describes our practices; consult your legal counsel for compliance guidance.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
