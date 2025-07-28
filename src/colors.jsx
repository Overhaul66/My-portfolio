function ColorPalette() {
  return (
    <div className="p-8 bg-base-100 min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Smeda Theme Color Palette</h1>
      
      {/* Primary Colors */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-secondary">Secondary Button</button>
          <button className="btn btn-accent">Accent Button</button>
        </div>
      </div>

      {/* Base Colors */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Base Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn bg-base-100 text-base-content border border-base-300">Base 100</button>
          <button className="btn bg-base-200 text-base-content">Base 200</button>
          <button className="btn bg-base-300 text-base-content">Base 300</button>
          <button className="btn btn-neutral">Neutral</button>
        </div>
      </div>

      {/* Status Colors */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Status Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="btn btn-info">Info Button</button>
          <button className="btn btn-success">Success Button</button>
          <button className="btn btn-warning">Warning Button</button>
          <button className="btn btn-error">Error Button</button>
        </div>
      </div>

      {/* Button Variants */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Button Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Primary Variants */}
          <div>
            <h3 className="text-lg font-medium text-base-content mb-3">Primary Variants</h3>
            <div className="space-y-2">
              <button className="btn btn-primary w-full">Primary</button>
              <button className="btn btn-primary btn-outline w-full">Primary Outline</button>
              <button className="btn btn-primary btn-ghost w-full">Primary Ghost</button>
              <button className="btn btn-primary btn-link w-full">Primary Link</button>
            </div>
          </div>

          {/* Secondary Variants */}
          <div>
            <h3 className="text-lg font-medium text-base-content mb-3">Secondary Variants</h3>
            <div className="space-y-2">
              <button className="btn btn-secondary w-full">Secondary</button>
              <button className="btn btn-secondary btn-outline w-full">Secondary Outline</button>
              <button className="btn btn-secondary btn-ghost w-full">Secondary Ghost</button>
              <button className="btn btn-secondary btn-link w-full">Secondary Link</button>
            </div>
          </div>

          {/* Success Variants */}
          <div>
            <h3 className="text-lg font-medium text-base-content mb-3">Success Variants</h3>
            <div className="space-y-2">
              <button className="btn btn-success w-full">Success</button>
              <button className="btn btn-success btn-outline w-full">Success Outline</button>
              <button className="btn btn-success btn-ghost w-full">Success Ghost</button>
              <button className="btn btn-success btn-link w-full">Success Link</button>
            </div>
          </div>

          {/* Warning Variants */}
          <div>
            <h3 className="text-lg font-medium text-base-content mb-3">Warning Variants</h3>
            <div className="space-y-2">
              <button className="btn btn-warning w-full">Warning</button>
              <button className="btn btn-warning btn-outline w-full">Warning Outline</button>
              <button className="btn btn-warning btn-ghost w-full">Warning Ghost</button>
              <button className="btn btn-warning btn-link w-full">Warning Link</button>
            </div>
          </div>
        </div>
      </div>

      {/* Button Sizes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <button className="btn btn-primary btn-xs">Extra Small</button>
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary">Normal</button>
          <button className="btn btn-primary btn-lg">Large</button>
        </div>
      </div>

      {/* Color Reference Cards */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Color Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Primary Color Card */}
          <div className="card bg-primary text-primary-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Primary Color</h3>
              <p>Smeda's signature orange</p>
              <p className="text-xs opacity-80">oklch(70% 0.15 45)</p>
            </div>
          </div>

          {/* Secondary Color Card */}
          <div className="card bg-secondary text-secondary-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Secondary Color</h3>
              <p>Complementary blue-gray</p>
              <p className="text-xs opacity-80">oklch(60% 0.12 220)</p>
            </div>
          </div>

          {/* Accent Color Card */}
          <div className="card bg-accent text-accent-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Accent Color</h3>
              <p>Vibrant orange variant</p>
              <p className="text-xs opacity-80">oklch(75% 0.18 35)</p>
            </div>
          </div>

          {/* Success Color Card */}
          <div className="card bg-success text-success-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Success Color</h3>
              <p>For positive feedback</p>
              <p className="text-xs opacity-80">oklch(65% 0.15 140)</p>
            </div>
          </div>

          {/* Warning Color Card */}
          <div className="card bg-warning text-warning-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Warning Color</h3>
              <p>For caution messages</p>
              <p className="text-xs opacity-80">oklch(75% 0.15 80)</p>
            </div>
          </div>

          {/* Error Color Card */}
          <div className="card bg-error text-error-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Error Color</h3>
              <p>For error messages</p>
              <p className="text-xs opacity-80">oklch(60% 0.2 25)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Text Color Examples */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Text Color Examples</h2>
        <div className="space-y-2">
          <p className="text-base-content text-lg">Primary text using text-base-content</p>
          <p className="text-base-content/70 text-lg">Secondary text using text-base-content/70</p>
          <p className="text-base-content/50 text-lg">Muted text using text-base-content/50</p>
          <p className="text-primary text-lg">Brand text using text-primary</p>
          <p className="text-neutral text-lg">Neutral text using text-neutral</p>
          <p className="text-success text-lg">Success text using text-success</p>
          <p className="text-warning text-lg">Warning text using text-warning</p>
          <p className="text-error text-lg">Error text using text-error</p>
          <p className="text-info text-lg">Info text using text-info</p>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-neutral mb-4">Smart Meter UI Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Balance Card */}
          <div className="card bg-base-100 shadow-lg border">
            <div className="card-body">
              <h3 className="card-title text-neutral">Account Balance</h3>
              <p className="text-3xl font-bold text-primary">₵ 125.50</p>
              <p className="text-base-content/60">Last updated: 2 minutes ago</p>
              <div className="card-actions">
                <button className="btn btn-primary">Top Up</button>
                <button className="btn btn-outline btn-secondary">View History</button>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="card bg-base-100 shadow-lg border">
            <div className="card-body">
              <h3 className="card-title text-neutral">Meter Status</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-success font-semibold">Online</span>
              </div>
              <p className="text-base-content">Current Usage: 2.4 kWh</p>
              <p className="text-base-content/60">Today's consumption</p>
              <div className="card-actions">
                <button className="btn btn-info btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;